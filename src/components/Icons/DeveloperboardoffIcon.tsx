import { Text } from "@lightningjs/solid";
import { Props, createStyles, FontTypes } from '../common';

const DeveloperboardoffIcon = ({ color, size, focusedSize, focusedColor, type = FontTypes.regular }: Props) => {
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
      {String.fromCharCode(parseInt('e4ff', 16))}
    </Text>
  );
};

export default DeveloperboardoffIcon;
