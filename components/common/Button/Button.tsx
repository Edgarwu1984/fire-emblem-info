import { ComponentProps, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './Button.module.scss';

// Initialize the Base Props
type BaseProps = {
  text: string;
  variant?: 'primary' | 'default';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
};

/* 
Use Omit to construct a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
Example: https://www.typescriptlang.org/docs/handbook/utility-types.html
*/
// keyof means union type; keyof BaseProps = text | className

// 1).Button Type
type ButtonAsButton = BaseProps &
  Omit<ComponentProps<'button'>, keyof BaseProps> & {
    as: 'button';
  };

// 2).Next Link Type
type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & { as: 'link' };

// 3).Anchor Link Type
type ButtonAsExternalLink = BaseProps &
  Omit<ComponentProps<'a'>, keyof BaseProps> & {
    as: 'externalLink';
  };

// Combine all the types
type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternalLink;

const Button = ({
  text,
  variant,
  icon,
  iconPosition = 'left',
  as,
  ...rest
}: ButtonProps) => {
  // Button Type Variants
  const btnVariantClass = () => {
    switch (variant) {
      case 'primary':
        return styles.btn_primary;
      default:
        return styles.btn_default;
    }
  };

  return (
    <>
      {as === 'button' && (
        // Need use the 'as' key word to specify props type for rest of the props
        <button
          className={`${btnVariantClass()}`}
          variant={variant}
          {...(rest as ButtonAsButton)}
        >
          <div
            className={
              iconPosition === 'left' ? styles.icon_left : styles.icon_right
            }
          >
            {icon && icon}
            {text}
          </div>
        </button>
      )}
      {as === 'link' && (
        <Link variant={variant} {...(rest as ButtonAsLink)}>
          <a className={`${btnVariantClass()}`}>
            <div
              className={
                iconPosition === 'left' ? styles.icon_left : styles.icon_right
              }
            >
              {icon && icon}
              {text}
            </div>
          </a>
        </Link>
      )}
      {as === 'externalLink' && (
        <a
          className={`${btnVariantClass()}`}
          target='_blank'
          rel='noreferrer'
          variant={variant}
          {...(rest as ButtonAsExternalLink)}
        >
          <div
            className={
              iconPosition === 'left' ? styles.icon_left : styles.icon_right
            }
          >
            {icon && icon}
            {text}
          </div>
        </a>
      )}
    </>
  );
};

export default Button;
