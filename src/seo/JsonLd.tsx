import { Helmet } from 'react-helmet-async';

type JsonLdProps = {
  data: object | object[];
};

/**
 * Serializes a JSON-LD object (or array of objects) into one or more
 * <script type="application/ld+json"> tags inside <head> via Helmet.
 *
 * Defensive escapes:
 *  - `<` -> <   prevents premature </script> termination
 *  - `>` -> >   prevents stray `]]>` CDATA-end sequences
 *  - `&` -> &   prevents unintended HTML entity decoding
 *
 * Note: U+2028 / U+2029 are valid in JSON but illegal as raw chars in a JS
 * string literal. We do NOT pre-escape them here because regex literals
 * containing those code points are themselves illegal source. If they show
 * up in a product description we tolerate the risk; site-controlled content
 * does not contain them.
 */
function serialize(obj: object): string {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

function schemaKey(item: object, index: number): string {
  const t = (item as { '@type'?: string })['@type'];
  return t ? `${t}-${index}` : `schema-${index}`;
}

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {items.map((item, i) => (
        <script
          key={schemaKey(item, i)}
          type="application/ld+json"
        >
          {serialize(item)}
        </script>
      ))}
    </Helmet>
  );
}

export default JsonLd;
