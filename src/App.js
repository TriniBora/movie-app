import Views from "./routes/Views";
import Layout from "./components/Layout/Layout";


function App() {

  return (
    <div className="App">
      <Layout>
        <Views />
      </Layout>
    </div>
  );
}

export default App;
