/**
 *
 * Implement a method getElementsByStyle() that finds DOM elements that are rendered by the browser using the specified style.
 * It is similar to Element.getElementsByClassName() but with some differences:
 *
 * It is a pure function which takes in an element, a property string, and a value string representing the style's property/value pair to be matched on the elements descendants. E.g. getElementsByStyle(document.body, 'font-size', '12px').
 * Similar to Element.getElementsByClassName(), only descendants of the element argument are searched, not the element itself.
 * Return an array of Elements, instead of an HTMLCollection of Elements.
 * The style property and value should be matched exactly as specified in the arguments.
 * The function should work for any valid CSS property and value.
 */

/**
 * @param {Element} element
 * @param {string} property
 * @param {string} value
 * @return {Array<Element>}
 */
export default function getElementsByStyle(element, property, value) {
  const elements = [];

  function traverse(el) {
    if (el == null) {
      return;
    }

    const computedStyles = getComputedStyle(el);
    if (computedStyles.getPropertyValue(property) === value) {
      elements.push(el);
    }

    for (const child of el.children) {
      traverse(child);
    }
  }

  for (const child of element.children) {
    traverse(child);
  }

  return elements;
}
