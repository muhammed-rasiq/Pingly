import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ChatDashBoard from './page/ChatDashBoard'
import Profile from './page/Profile'
import Settings from './page/Settings'
import ForgotPassword from './components/ForgotPassword'
import NewChat from './page/NewChat'
import GroupChat from './page/GroupChat'
import GroupConversation from './page/GroupConversation'
import ContactDetails from './page/ContactDetails'
import Notifications from './page/Notifications'
import EditProfile from './page/EditProfile'
import ChatSearch from './page/ChatSearch'
import ArchivedChats from './page/ArchivedChats'
import BlockedContacts from './page/BlockedContacts'
import PrivacySecurity from './page/PrivacySecurity'
import HelpSupport from './page/HelpSupport'
import AboutApp from './page/AboutApp'
import LogoutConfirmation from './page/LogoutConfirmation'
import EmptyChat from './page/EmptyChat'
import ReportContact from './page/ReportContact'
import MediaPreview from './page/MediaPreview'

function App() {

  return (
    <>

    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='chatDash' element={<ChatDashBoard/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='settings' element={<Settings/>}/>
      <Route path='forgotPassword' element={<ForgotPassword/>}/>
      <Route path='newChat' element={<NewChat/>}/>
      <Route path='group-chat' element={<GroupChat/>}/>
      <Route path='groupConversation' element={<GroupConversation/>}/>
      <Route path='contactdetails' element={<ContactDetails/>}/>
      <Route path='notifications' element={<Notifications/>}/>
      <Route path='editProfile' element={<EditProfile/>}/>
      <Route path='chatSearch' element={<ChatSearch/>}/>
      <Route path='archivedChats' element={<ArchivedChats/>}/>
      <Route path="blocked-contacts" element={<BlockedContacts />} />
      <Route path="privacy-security" element={<PrivacySecurity />}/>
      <Route path="help-support" element={<HelpSupport/>} />
      <Route path="about" element={<AboutApp />} />
      <Route path="logout" element={<LogoutConfirmation />}/>
      <Route path="emptyChat" element={<EmptyChat />}/>
      <Route path="report-contact" element={<ReportContact />} />
      <Route path="media-preview" element={<MediaPreview />} />


 

 
        


    </Routes>
     
    </>
  )
}

export default App
