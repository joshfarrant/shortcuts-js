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

// TODO: WIP
const printType = (type) => {
  switch (type.type) {
    case 'stringLiteral':
      return `'${type.value}'`;
    case 'union':
      return type.types.map(printType).join(' | ');
    case 'array':
      const element = printType(type.elementType);
      return `${type.elementType.type === 'union' ? `(${element})` : element}[]`;
    default:
      return type.name;
  }
};

exported.children
  .filter((file) => (
    file.name.startsWith('"actions/') &&
    !file.name.endsWith('/index"')
  ))
  .forEach((file) => file.children
    .filter((child) => (
      child.comment &&
      child.comment.tags &&
      child.comment.tags.some((tag) => tag.tag === 'action')
    ))
    .forEach((child) => {
      // comment parsing
      const description = child.comment.shortText;
      const comment = child.comment.text;
      const tags = child.comment.tags;

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
          type: printType(parameter.type),
          default: parameter.defaultValue,
          comment: parameter.comment && parameter.comment.shortText,
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
          parameters: parameters,
          hasOutput: !child.flags.isExported,
          type: printType(signature.type),
          source: source,
        },
      };

      const id = data.actions.push(action);
      addToSections(name, id, sections);
    }),
  );

Object.entries(data.sections).forEach(([section, categories]) => {
  Object.entries(categories).forEach(([category, { content }]) => {
    if (!content) delete data.sections[section][category];
  });
  if (Object.keys(categories).length === 0) delete data.sections[section];
});

export default data;
