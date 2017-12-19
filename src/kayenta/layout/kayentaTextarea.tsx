import * as React from 'react';
import * as classNames from 'classnames';

export interface IKayentaTextareaProps {
  className?: string;
}

export default (props: IKayentaTextareaProps & React.ChangeTargetHTMLProps<HTMLTextAreaElement>) => {
  const { className, ...textareaProps } = props;
  return (
    <textarea
      className={classNames('form-control', 'input-sm', className)}
      {...textareaProps}
    />
  );
};