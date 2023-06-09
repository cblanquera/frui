//types
import type { CheckboxProps } from 'frui-core/dist/types/fields';
//react
import React from 'react';
//hooks
import useCheckbox from 'frui-core/dist/hooks/useCheckbox';
//helpers
import { makeGroupStyles, makeGroupClasses } from 'frui-core/dist/utils';

/**
 * Styled Checkbox  Component (Main)
 */
const Checkbox: React.FC<CheckboxProps> = (props) => {
  //separate component related props from field attributes
  const {   
    defaultChecked,
    checked,
    label, 
    error, 
    errorColor = '#DC3545',
    color = '#32A3CE',
    check,
    circle,
    square,
    sharp,
    rounded,
    outline,
    solid,
    style,
    className,
    styles,
    classNames,
    onChange,
    onUpdate,
    ...attributes 
  } = props;
  //hooks
  const { isChecked, isHovering, handlers } = useCheckbox({ 
    onChange, 
    onUpdate, 
    checked,
    defaultChecked 
  });

  //we cant store the escape character in a variable
  //so we need to wrap it in a react component
  const char = check ? (<span>&#10003;</span>)
    : circle ? (<span>&#9632;</span>)
    : square ? (<span>&#9679;</span>)
    : (<span>&#10003;</span>);

  //variables
  const map = {
    classes: makeGroupClasses(classNames, {
      container: undefined,
      control: undefined,
      label: undefined,
      square: undefined
    }),
    styles: makeGroupStyles(styles, {
      container: { color: error ? errorColor: undefined },
      control: {
        cursor: 'pointer',
        height: '18px',
        opacity: 0,
        outline: 'none !important',
        position: 'absolute',
        width: '18px',
        zIndex: 12
      },
      label: {
        display: 'inline-block',
        fontWeight: 'normal',
        lineHeight: '20px',
        margin: 0,
        minHeight: '18px',
        minWidth: '18px',
        position: 'relative',
        zIndex: 11
      },
      wrapper: {
        backgroundColor: solid && isChecked ? color : '#FAFAFA',
        borderColor: isChecked ? color : isHovering ? color : '#C8C8C8',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: rounded ? '100%': 0,
        boxShadow: isChecked 
          ? '0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1)' 
          : '0 1px 2px rgba(0, 0, 0, 0.05)',
        color: solid ? '#FAFAFA' : color,
        display: 'inline-block',
        fontSize: '12px',
        fontWeight: isChecked ? 900 : 'normal',
        height: '16px',
        lineHeight: '14px',
        minWidth: '16px',
        marginRight: '5px',
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    })
  }
  //render
  return (
    <label className={map.classes.container} style={map.styles.container}>
      <input 
        {...attributes} 
        onChange={handlers.change} 
        onMouseOut={handlers.out}
        onMouseOver={handlers.over}
        type="checkbox" 
        className={map.classes.control} 
        style={map.styles.control}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      <span className={map.classes.label} style={map.styles.label}>
        <span className={map.classes.wrapper} style={map.styles.wrapper}>
          {isChecked && char}
        </span>
        {label}
      </span>
    </label>
  );
}

export default Checkbox;