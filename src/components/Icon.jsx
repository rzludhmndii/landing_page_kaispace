/**
 * Pembungkus tipis untuk Material Symbols Outlined.
 * <Icon name="hub" filled className="text-primary text-3xl" />
 */
export default function Icon({ name, filled = false, className = '', ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined${filled ? ' icon-filled' : ''}${
        className ? ` ${className}` : ''
      }`}
      {...rest}
    >
      {name}
    </span>
  )
}
