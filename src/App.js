import { Divider } from "antd";
import AnotherParticipation from "./components/AnotherParticipation";
import PollDisplay from "./components/PollDisplay";
import ThankYou from "./components/ThankYou";
import UserParticipation from "./components/UserParticipation";
import { useState } from "react";
import { useQuestions } from "./context/Questions";
import { Layout, Menu, theme } from "antd";

import Timer from "./taskb/Timer";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Layout>
        <Header style={{ color: "white" }}>Poll App</Header>
        <Layout>
          <Sider
            style={{
              backgroundColor: "whitesmoke",
            }}
          ></Sider>
          <Content>
            <PollDisplay />
            <UserParticipation
              submitted={submitted}
              setSubmitted={setSubmitted}
            />
          </Content>
        </Layout>
        <Footer style={{ marginLeft: "150px" }}>
          {submitted && <ThankYou />}
          <AnotherParticipation
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        </Footer>
      </Layout>
      <Divider />
      <h1>Task B</h1>
      <Timer />
    </>
  );
}

export default App;
