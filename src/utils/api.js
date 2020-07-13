import axios from 'axios'

export const request = async ({
  url,
  data,
  method,
  baseUrl = process.env.VUTTR_API_URL,
  ...rest
}) => {
  let sanitizedUrl = url

  if (!url) {
    // eslint-disable-next-line no-console
    return console.error('no url provided to request')
  }

  if (url[0] === '/') {
    sanitizedUrl = `${baseUrl}${url.slice(1, url.length)}`
  }

  try {
    const response = await axios({
      method,
      url: sanitizedUrl,
      data,
      ...rest,
    })

    return response
  } catch (error) {
    if (error.response) {
      return error.response
    }

    return { ...error, status: 500 }
  }
}

/**
 * Get tools from API
 */
export const getTools = async (querie = '') =>
  request({
    url: `/tools?${querie}`,
    method: 'GET',
  })

/**
 * Add tools into API
 */
export const addTools = async (data) =>
  request({
    url: '/tools',
    method: 'POST',
    data,
  })
