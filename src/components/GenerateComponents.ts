// GenerateComponents.ts
import { writeFileSync, mkdirSync } from 'fs';
import { Codepoints } from '../Codepoints';

function addUnderscore(str) {
    if (str.charAt(0) >= '0' && str.charAt(0) <= '9') {
        return '_' + str;
    } else {
        return str;
    }
}

const generateComponent = (name: string, codepoint: string) => {
  const componentName = addUnderscore(`${name}Icon`);
  componentName[0].toUpperCase();
  const componentCode = `import { Text } from "@lightningjs/solid";
import { Props, createStyles, FontTypes } from '../common';

const ${componentName} = ({ color, size, focusedSize, focusedColor, type = FontTypes.regular }: Props) => {
  const styles = createStyles(type);
  const iconStyle = {
    ...styles.icon,
    color: color || styles.icon.color,
    fontSize: size || styles.icon.fontSize,
    focus: {
      color: focusedColor || color || styles.icon.color,
      fontSize: focusedSize || size || styles.icon.fontSize,
    }
  };

  return (
    <Text style={iconStyle}>
      {String.fromCharCode(parseInt('${codepoint}', 16))}
    </Text>
  );
};

export default ${componentName};
`;

  // Ensure the directory exists
  mkdirSync('Icons', { recursive: true });
  // Write the component's code to its own file
  writeFileSync(`./Icons/${componentName}.tsx`, componentCode);
};

Object.entries(Codepoints).forEach(([name, codepoint]) => {
  // Create a valid component name by capitalizing and removing non-alphanumeric characters
  const validComponentName = name.charAt(0).toUpperCase() + name.slice(1).replace(/[^a-zA-Z0-9]/g, '');
  generateComponent(validComponentName, codepoint); // Assuming 'MDL' is the font family you want to use
});
