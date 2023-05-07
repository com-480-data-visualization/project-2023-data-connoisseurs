import './App.css';
import {Drawer, Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {useState} from "react";

const items = [{
    label: 'Voting', key: 'voting', // icon: <MailOutlined/>,
}, {
    label: 'Polling', key: 'polling', // icon: <AppstoreOutlined/>,
},]

function App() {
    const [current, setCurrent] = useState('voting');
    const [open, setOpen] = useState(false);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (<div className="App">
        <Layout>
            <Header>
                <Menu onClick={() => {
                }} selectedKeys={[current]} mode="horizontal"
                      items={items}/>
            </Header>
            <Layout>
                <Content>
                    <div>
                        <a href="#">
                            <img style={{width: 900, height: 700}}
                                 src={process.env.PUBLIC_URL + '/europe.png'}
                                 alt="Map of Europe"
                                 onClick={showDrawer}
                            />
                        </a>
                    </div>
                </Content>
                <Drawer title="Germany" placement="right" onClose={onClose}
                        open={open}>
                    <div>
                        <img style={{width: 200, height: 600}}
                             src={process.env.PUBLIC_URL + '/country.png'}
                             alt="Map of Europe"/>
                    </div>
                </Drawer>
            </Layout>
            {/*<Footer>Footer</Footer>*/}
        </Layout>
    </div>);
}

export default App;
