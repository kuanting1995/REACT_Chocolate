import { useLocation, useNavigate, useParams } from 'react-router-dom'

// 此元件是為了與v5版中的hoc相容使用
// 此外類別型元件需要這個元件才能存取router中的例如location與各各屬性
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}
