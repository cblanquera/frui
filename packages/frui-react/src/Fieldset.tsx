//types
import type { FieldsetProps, FieldsProps } from 'frui-core/dist/types/components';
//react
import React from 'react';
//components
import Button from './Button';
//hooks
import useFieldset from 'frui-core/dist/hooks/useFieldset';

/**
 * Factory to make a dynamic form fieldset
 * A group of fields that can be multiplied or removed dynamically
 */
export default function make<ValueType = any>(
  Fields: React.FC<FieldsProps<ValueType>>
) {
  //renders a dynamic form fieldset
  const Fieldset: React.FC<FieldsetProps<ValueType>> = (props) => {
    //extract props
    const { 
      add,
      data,
      value, 
      defaultValue,
      emptyValue, 
      error,
      errorColor = '#DC3545',
      styles,
      classNames,
      onChange, 
      onUpdate,
      ...attributes 
    } = props;

    const { values, handlers } = useFieldset({
      value, 
      defaultValue,
      emptyValue, 
      onChange, 
      onUpdate
    });

    return (
      <>
        {values.map((value, index) => (
          typeof value !== 'undefined' ? <Fields 
            data={data}
            key={index} 
            index={index}
            values={values}
            error={error}
            errorColor={errorColor}
            styles={styles}
            classNames={classNames}
            set={handlers.set}
          /> : null
        ))}
        <Button 
          muted
          {...attributes}
          onClick={handlers.add}
          type="button"
        >
          <span style={{ marginRight: '2px' }}>&#43;</span>
          {add || 'Add'}
        </Button>
      </>
    );
  };

  return Fieldset;
}