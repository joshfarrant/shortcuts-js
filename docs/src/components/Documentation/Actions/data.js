import exported from '../../../api/exported.json';

const data = {
  actions: [],
  sections: {
    'Actions': {
      'Scripting': { icon: 'ScriptingCategory' },
    },
    'Content Types': {
      'Apps': { icon: 'Apps' },
      'Calendar': { icon: 'Date' },
      'Contacts': { icon: 'ContactsCategory' },
      'Documents': { icon: 'Documents' },
      'Health': { icon: 'HealthCategory' },
      'Home': { icon: 'Home' },
      'Location': { icon: 'Location' },
      'Music': { icon: 'MusicCategory' },
      'Photos & Video': { icon: 'Photos' },
      'Sharing': { icon: 'Sharing' },
      'Text': { icon: 'Text' },
      'Web': { icon: 'Web' },
    },
    'Missing Data': {
      'No @icon': { icon: '' },
      'No @section': { icon: '' },
    },
  },
};

const addToSections = (name, id, paths) => {
  paths.forEach(([section, category, group]) => {
    data.sections[section][category].content = data.sections[section][category].content || {};
    data.sections[section][category].content[group] = data.sections[section][category].content[group] || {};
    data.sections[section][category].content[group][name] = id - 1;
  });
};

exported.children
  .filter((file) => (
    file.name.startsWith('"actions/') &&
    file.name !== '"actions/index"'
  ))
  .forEach((file) => file.children
    .filter((child) => (
      child.comment &&
      child.comment.tags &&
      child.comment.tags.some((tag) => tag.tag === 'action')
    ))
    .forEach((child) => {
      // comment parsing
      const tags = child.comment.tags;
      const last = tags.pop();
      const [content, description, ...rest] = last.text.split('\n\n');
      const comment = rest.join('\n\n');

      last.text = content;
      tags.push(last);

      const name = tags.find((tag) => tag.tag === 'action').text;
      const iconTag = tags.find((tag) => tag.tag === 'icon');
      const icon = iconTag ? iconTag.text : 'Placeholder';
      const sections = tags.filter((tag) => tag.tag === 'section')
        .map((tag) => tag.text.split(/\s?>\s?/g));

      if (!iconTag) sections.push(['Missing Data', 'No @icon', '']);
      if (!sections.length) sections.push(['Missing Data', 'No @section', '']);

      // parameters parsing
      const signature = child.signatures[0];
      const parameters = signature.parameters && signature.parameters[0].type.declaration.children
        .map((parameter) => ({
          name: parameter.name,
          type: parameter.type,
          comment: parameter.comment.shortText,
        }));

      const { fileName, line } = child.sources[0];
      const source = `${fileName}#L${line}`;

      const action = {
        name,
        icon,
        sections,
        description,
        comment,
        func: {
          name: child.name,
          type: signature.type,
          parameters: parameters,
          hasOutput: !child.flags.isExported,
          source: source,
        },
      };

      const id = data.actions.push(action);
      addToSections(name, id, sections);
    }),
  );

export default data;
