import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    lineHeight: 1.5,
    width: '100%',
    display: 'flex',
  },
});

export interface FormInputProps {
  label?: string;
  labelPlacement?: 'top' | 'left';
}

export function FormInput({ label }: FormInputProps) {
  return (
    <div {...stylex.props(styles.root)}>
      <span>{label}</span>
      <input />
    </div>
  );
}
