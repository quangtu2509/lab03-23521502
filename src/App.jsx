// src/App.jsx

import UserProfile from "./UserProfile";
import Counter from "./Counter";
import Login from "./Login";
import Card from "./Card";
import Accordion from "./Accordion";
import TodoApp from "./TodoApp";
function App() {
  const user1 = {
    name: "Nguyễn Quang Tú",
    email: "tokedotn@gmail.com",
    avatarUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/411652499_728988862621564_1098913750704761915_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHK87FxX842lFJwf1q9j4ncoySFs_gz2C-jJIWz-DPYLylM0nEQQxXsKHrSHaAlhMWBogPtuahSqODspsNXysB0&_nc_ohc=96FJnLegTckQ7kNvwGK8AhS&_nc_oc=Adna_1NiccyFYJtB1jh9uJd6tPAGgzt5mLu_EaGzYHf4faVnKoYhT_2pSJsPXteUKg8&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=jvTgIITm8g9jqbtOQj3u2w&oh=00_AfihUMvUV2vS5m6pcGDhhLH3heBlyWh0L723ynvO0Hnuuw&oe=6918D62E",
    imageSize: 120,
  };

  const user2 = {
    name: "Nguyễn Quang Tú",
    email: "tokedotn@gmail.com",
    avatarUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/522717987_1114611014059345_7899095210976765747_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGUN7glqxkhg0_AKWgzH3CjkSjBqIy0Vg-RKMGojLRWD4q7OTz4YBI9T64HJcseqq_qXyAmD3NpmcAJdv0xoDpV&_nc_ohc=MDBKGGCbW34Q7kNvwFH1epu&_nc_oc=Adm1r2cT0DptZaFGxZjiliOvzGUDp3XhT-yutsQpNKXpGsBujfKTaPnBUGpPK-AoyzI&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=Qw0n7gSC_ZRTrwva3CEzMQ&oh=00_AfhleCU7ng2K1_veGlglE_AbipfHgL4YqVGb__1OjeYeGg&oe=6918B07E",
    imageSize: 180,
  };

  return (
    <div className="App">
      <h1>My React App</h1>

      <Card title="User Profiles">
        <UserProfile userData={user1} theme="light" />
        <hr />
        <UserProfile userData={user2} theme="dark" />
      </Card>

      <Card title="My Counter">
        <Counter />
      </Card>

      <Card title="Login Form">
        <Login />
      </Card>

      <hr />

      <Card title="Accordion Demo">
        <Accordion />
      </Card>

      <Card title="My To-Do List Project">
        <TodoApp />
      </Card>
    </div>
  );
}

export default App;
