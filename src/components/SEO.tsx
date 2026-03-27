import { Helmet } from 'react-helmet-async'
import { metadata } from '../data/metadata'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({ 
  title = metadata.title, 
  description = metadata.description,
  image = metadata.imageUrl,
  url = metadata.url,
  type = 'website'
}: SEOProps) => {
  
  const fullTitle = `${title} | Joy Sithole`
  const imageUrl = url + image
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:site_name" content={metadata.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      {metadata.twitterHandle && <meta property="twitter:site" content={metadata.twitterHandle} />}

      {/* WhatsApp / iMessage */}
      <meta property="og:image:alt" content={metadata.name} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#915F6D" />
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href={image} />
      <link rel="apple-touch-icon" href={image} />
      <meta name="apple-mobile-web-app-title" content={metadata.name} />
    </Helmet>
  )
}

export default SEO
