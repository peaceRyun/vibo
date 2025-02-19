import { BrowserRouter, Routes, Route } from 'react-router';
import GlobalStyle from './styled/GlobalStyle';
import MainHome from './pages/home/main/MainHome';
// import AboutP from './pages/about/AboutP';
import ContentDetail from './pages/contents/ContentDetail';
import Layout from './common/Layout';
import ContentList from './pages/contents/ContentList';
import MovieHome from './pages/home/movie/MovieHome';
import SeriesHome from './pages/home/series/SeriesHome';
import Membership from './pages/member/Membership';
import ProfileInfoEdit from './pages/member/ProfileInfoEdit';
import LiveHome from './pages/home/live/LiveHome';
import ProfileEdit from './pages/member/ProfileEdit';
import Mypage from './pages/member/Mypage';
import ProfilesSelect from './components/member/mobileprofile/ProfilesSelect';
import ProfileForEdit from './components/member/mobileprofile/ProfileForEdit';
import ProfilesForEdit from './components/member/mobileprofile/ProfilesForEdit';
import ContentPlayer from './pages/contents/ContentPlayer';
import ScrollToTop from './utils/routeUtils';
import Register from './pages/member/Register';
import Login from './pages/member/Login';
import About from './pages/about/About';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <Routes>
          <Route path="/player">
            <Route index element={<ContentPlayer />} />
            {/* <Route path=':name' element={<Project />} /> */}
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainHome />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/moviehome" element={<MovieHome />} />
            <Route path="/serieshome" element={<SeriesHome />} />
            <Route path="/livehome" element={<LiveHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/profileedit" element={<ProfileEdit />} />
            <Route path="/profileselect" element={<ProfilesSelect />} />
            <Route path="/profileforedit" element={<ProfileForEdit />} />
            <Route path="/profilesforedit" element={<ProfilesForEdit />} />
            <Route path="/profileinfoedit" element={<ProfileInfoEdit />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/detail/:id">
              <Route index element={<ContentDetail />} />
              {/* <Route path=':name' element={<Project />} /> */}
            </Route>
            <Route path="/contentlist">
              <Route index element={<ContentList />} />
              {/* <Route path=':name' element={<Project />} /> */}
            </Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
{
  /* 
    첫번째 방법
    <Route path='/경로, 상대, 절대' element={컴포넌트} />

    두번째 방법
    <Route path='/경로, 상대, 절대' element={컴포넌트} ></Route> 
    
    세번째 방법
    <Route>
        <Route/>
        <Route/>
    </Route>

    <Route path='/profile' element={<Profile />} />
    <Route path='/profile/:name' element={<Project />} />
    <Route path='/profile/:사용자정의동적변수' element={<Project />} />
    */
}
