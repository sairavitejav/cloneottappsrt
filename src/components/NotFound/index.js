import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeader,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <NotFoundHeader>Page Not Found</NotFoundHeader>
    <NotFoundDesc>
      We are sorry, the page you requested could not be found.
    </NotFoundDesc>
  </NotFoundContainer>
)
export default NotFound
