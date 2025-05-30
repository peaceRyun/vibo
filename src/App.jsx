import { HashRouter, Routes, Route } from 'react-router-dom';
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
            <HashRouter>
                <ScrollToTop />
                <GlobalStyle />
                <Routes>
                    <Route path='/player'>
                        <Route index element={<ContentPlayer />} />
                    </Route>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<About />} />
                        <Route path='/mainhome' element={<MainHome />} />
                        <Route path='/membership' element={<Membership />} />
                        <Route path='/moviehome' element={<MovieHome />} />
                        <Route path='/serieshome' element={<SeriesHome />} />
                        <Route path='/livehome' element={<LiveHome />} />

                        <Route path='/profileedit' element={<ProfileEdit />} />
                        <Route path='/profileselect' element={<ProfilesSelect />} />
                        <Route path='/profileforedit' element={<ProfileForEdit />} />
                        <Route path='/profilesforedit' element={<ProfilesForEdit />} />
                        <Route path='/profileinfoedit' element={<ProfileInfoEdit />} />
                        <Route path='/mypage' element={<Mypage />} />
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/detail/series/:id' element={<ContentDetail contentType='series' />} />
                        <Route path='/detail/movie/:id' element={<ContentDetail contentType='movie' />} />
                        <Route path='/contents'>
                            <Route path='all/:genreId?' element={<ContentList contentType='all' />} />
                            <Route path='movie/:genreId?' element={<ContentList contentType='movie' />} />
                            <Route path='series/:genreId?' element={<ContentList contentType='series' />} />
                        </Route>
                        <Route path='/contentlist' element={<ContentList contentType='all' />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
