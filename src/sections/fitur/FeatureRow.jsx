import Icon from '../../components/Icon.jsx'

/**
 * Baris fitur bergantian (teks kiri / gambar kanan, lalu sebaliknya).
 * `reversed` = gambar di kiri pada desktop.
 */
export default function FeatureRow({
  icon,
  iconClassName,
  title,
  description,
  bullets,
  image,
  imageAlt,
  reversed = false,
}) {
  const media = (
    <div
      className={`min-w-0 rounded-xl overflow-hidden shadow-soft border border-outline-variant/30 ${
        reversed ? '' : 'order-1 md:order-2'
      }`}
    >
      {/* GANTI GAMBAR */}
      <img alt={imageAlt} className="w-full h-auto object-cover aspect-[4/3]" src={image} />
    </div>
  )

  const copy = (
    <div className={`min-w-0 ${reversed ? 'pl-0 md:pl-12' : 'order-2 md:order-1 pr-0 md:pr-12'}`}>
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-stack-md ${iconClassName}`}
      >
        <Icon name={icon} filled />
      </div>
      <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">{title}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">{description}</p>
      <ul className="space-y-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start">
            <Icon name="check_circle" className="text-primary mr-3 mt-1" />
            <span className="font-body-md text-body-md">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
      {reversed ? (
        <>
          {media}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {media}
        </>
      )}
    </div>
  )
}
