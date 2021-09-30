// log the pageview with their URL
export const pageview = (url) => {
  console.log('pageview test')
  if (process.env.NODE_ENV !== "production"){
    console.log('pageview', url);
    return
  } 

  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

// log specific events happening.
export const logAnalyticsEvent = ({
  action,
  params,
}) => {
  if (process.env.NODE_ENV !== "production"){
    console.log('analyticsEvent: ', action, params);
    return
  } 

  window.gtag("event", action, params)
}
