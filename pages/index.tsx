import Layout from "../components/Layout";
import { useAppSelector } from "../hooks";
import { selectCurrentLanguage } from "../reducers/languagesReducer";

const Index = () => {  
  return (
    <Layout>
      {'Index'}
    </Layout>
  )
}

export default Index
