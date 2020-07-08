export default (text) => {
  const tags = document.querySelectorAll('.tag')
  tags.forEach((tag) => {
    let { innerHTML } = tag
    const index = innerHTML.indexOf(text)
    if (index >= 0) {
      if (text.length + 1 === innerHTML.length) {
        innerHTML = `<mark>${innerHTML}</mark>`
      } else {
        innerHTML = `${innerHTML.substring(0, index)}<mark>${innerHTML.substring(
          index,
          index + text.length,
        )}</mark>${innerHTML.substring(index + text.length)}`
      }
      // eslint-disable-next-line no-param-reassign
      tag.innerHTML = innerHTML
    }
  })
}
