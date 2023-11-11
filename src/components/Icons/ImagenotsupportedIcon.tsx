import { Text } from "@lightningjs/solid";
import { Props, createStyles, FontTypes } from '../common';

const ImagenotsupportedIcon = ({ color, size, focusedSize, focusedColor, type = FontTypes.regular }: Props) => {
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
      {String.fromCharCode(parseInt('f116', 16))}
    </Text>
  );
};

export default ImagenotsupportedIcon;
