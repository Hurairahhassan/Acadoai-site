
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, BookOpen, CheckSquare, TrendingUp, 
  Bell, Settings, Search, LogOut, Calendar, FileText, PieChart, Award,
  Briefcase, GraduationCap, MoreVertical, MessageSquare
} from 'lucide-react';
import { UserRole } from '../types';

// --- Component: Admin View (Matches Screenshot 1) ---
const AdminView = () => (
  <div className="flex h-full bg-slate-50 text-slate-800 font-sans overflow-hidden rounded-xl border border-slate-200 shadow-2xl">
    {/* Sidebar */}
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col hidden lg:flex flex-shrink-0">
      <div className="p-5 flex items-center gap-2 border-b border-slate-100 h-16">
        <div className="bg-blue-600 text-white p-1 rounded">
          <span className="font-bold text-lg">A</span>
        </div>
        <span className="font-bold text-lg">Admin Panel</span>
      </div>
      <div className="p-4 space-y-1 text-sm font-medium overflow-y-auto flex-1">
        <div className="text-blue-600 bg-blue-50 px-3 py-2 rounded-md mb-2">Admin Mode</div>
        {[
          { icon: <LayoutDashboard size={18}/>, label: 'Dashboard' },
          { icon: <Users size={18}/>, label: 'User Management' },
          { icon: <BookOpen size={18}/>, label: 'Course Management' },
          { icon: <Briefcase size={18}/>, label: 'Class Management' },
          { icon: <CheckSquare size={18}/>, label: 'Attendance Management' },
          { icon: <TrendingUp size={18}/>, label: 'Finance Management' },
          { icon: <FileText size={18}/>, label: 'Uploads' },
          { icon: <LayoutDashboard size={18}/>, label: 'AI Assistant' },
          { icon: <Settings size={18}/>, label: 'General Settings' },
          { icon: <Search size={18}/>, label: 'Ask Your Data' }
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${i === 0 ? 'text-blue-600 bg-blue-50' : 'text-slate-500 hover:bg-slate-50'}`}>
            {item.icon}
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-100 text-slate-500 flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors">
        <LogOut size={18} /> Logout
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 relative">
      <main className="flex-1 p-6 overflow-y-auto no-scrollbar">
        {/* Blue Header */}
        <div className="bg-blue-600 text-white p-6 rounded-xl mb-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Admin Dashboard</h2>
          <p className="text-blue-100 opacity-90">Overview of system performance, users, and activities</p>
        </div>

        {/* Tab-like pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {['Overview', 'Students', 'Teachers', 'Classes'].map((tab, i) => (
             <button key={tab} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${i === 0 ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:bg-slate-200'}`}>
               {tab}
             </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
           {[
             { title: 'Total Students', val: '0', displayVal: '1,167', sub: '+1167 since last semester', icon: <Users className="text-blue-500" />, subColor: 'text-green-600' },
             { title: 'Total Teachers', val: '0', displayVal: '36', sub: '+36 since last semester', icon: <Briefcase className="text-purple-500" />, subColor: 'text-green-600' },
             { title: 'Active Classes', val: '36', displayVal: '36', sub: '+5 from last month', icon: <BookOpen className="text-green-500" />, subColor: 'text-green-600' },
             { title: 'Average GPA', val: '3.42', displayVal: '3.42', sub: 'Attendance 92%', icon: <Award className="text-yellow-500" />, showBar: true }
           ].map((card, i) => (
             <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-2">
                 <span className="text-slate-500 text-sm font-medium">{card.title}</span>
                 <div className="p-2 bg-slate-50 rounded-full">{card.icon}</div>
               </div>
               <div className="text-3xl font-bold text-slate-900 mb-1">{i < 2 ? card.val : card.displayVal}</div>
               {i < 2 && <div className="text-sm text-slate-400 absolute opacity-0 group-hover:opacity-100">Loading...</div>}
               {/* Mocking the specific "0" then green text look from screenshot 1 */}
               {i < 2 ? (
                  <div className="text-xs text-green-600 font-bold mt-1">{card.sub}</div> 
               ) : (
                  <div className={`text-xs ${i===3 ? 'text-slate-500' : 'text-green-600'} font-medium mt-1`}>
                    {card.sub}
                  </div>
               )}
               
               {card.showBar && (
                 <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full w-[92%] bg-blue-600 rounded-full"></div>
                 </div>
               )}
             </div>
           ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <TrendingUp size={18} className="text-blue-600"/> Student Performance Trends
                </h3>
             </div>
             <div className="space-y-5">
                {[
                  { mon: 'Jan', val: 70 }, { mon: 'Feb', val: 75 }, { mon: 'Mar', val: 68 }, { mon: 'Apr', val: 78 }, { mon: 'May', val: 82 }, { mon: 'Jun', val: 81 }
                ].map((d) => (
                  <div key={d.mon} className="flex items-center gap-4">
                    <span className="text-xs text-slate-500 w-8 font-medium">{d.mon}</span>
                    <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out" style={{width: `${d.val}%`}}></div>
                    </div>
                    <span className="text-xs font-bold text-slate-700 w-8 text-right">{d.val}%</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 className="font-bold mb-4 text-slate-800 flex items-center gap-2">
               <TrendingUp size={18} className="text-purple-600"/> Teacher Activity Overview
             </h3>
             <div className="space-y-0 text-sm">
               <div className="grid grid-cols-4 pb-3 border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <div className="col-span-2">Teacher</div>
                  <div className="text-center">Classes</div>
                  <div className="text-right">Stats</div>
               </div>
               {[
                 { name: 'Dr. Johnson', c: 15, f: 28, m: 12 },
                 { name: 'Mrs. Smith', c: 18, f: 32, m: 8 },
                 { name: 'Mr. Davis', c: 12, f: 24, m: 15 },
                 { name: 'Dr. Garcia', c: 16, f: 19, m: 10 },
                 { name: 'Ms. Wilson', c: 14, f: 22, m: 11 },
               ].map((t, i) => (
                 <div key={i} className="grid grid-cols-4 py-4 border-b border-slate-50 items-center hover:bg-slate-50 transition-colors">
                   <div className="col-span-2 font-medium text-slate-700">{t.name}</div>
                   <div className="text-center text-slate-500">{t.c}</div>
                   <div className="text-right text-slate-500">{t.f}</div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

// --- Component: Teacher View (Matches Screenshot 3) ---
const TeacherView = () => (
  <div className="flex h-full bg-slate-50 text-slate-800 font-sans overflow-hidden rounded-xl border border-slate-200 shadow-2xl">
    {/* Sidebar */}
    <div className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col flex-shrink-0">
       <div className="p-5 flex items-center gap-2 h-16 border-b border-slate-50">
          <div className="bg-blue-600 text-white p-1.5 rounded text-xs font-bold">T</div>
          <span className="font-bold text-lg">Teacher Portal</span>
       </div>
       <div className="p-4 space-y-1 text-sm font-medium">
          {['Dashboard', 'Classes', 'Attendance', 'Exams', 'Class Tests', 'Feedback & Communication', 'AI Assistance', 'Settings'].map((item, i) => (
             <div key={i} className={`px-3 py-2.5 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${i===0 ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-500 hover:bg-slate-50'}`}>
                {i===0 && <LayoutDashboard size={18} />}
                {i===1 && <BookOpen size={18} />}
                {i===2 && <CheckSquare size={18} />}
                {i===3 && <GraduationCap size={18} />}
                {i===4 && <FileText size={18} />}
                {i===5 && <MessageSquare size={18} />}
                {i>5 && <Settings size={18} />}
                <span className="truncate">{item}</span>
             </div>
          ))}
       </div>
       <div className="mt-auto p-4 border-t border-slate-100 text-slate-500 flex items-center gap-2 cursor-pointer hover:text-red-500">
          <LogOut size={18} /> Logout
       </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-6 pt-6 pb-2">
         <h2 className="text-2xl font-bold text-slate-900">Welcome, Teacher</h2>
         <p className="text-slate-500 text-sm">Friday, November 21, 2025</p>
      </div>
      
      <main className="flex-1 p-6 pt-4 overflow-y-auto no-scrollbar flex flex-col xl:flex-row gap-6">
         {/* Center Column */}
         <div className="flex-1 space-y-6 min-w-0">
            {/* Blue Header Card */}
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
               <div>
                  <h2 className="text-2xl font-bold">Welcome, Teacher</h2>
                  <p className="text-blue-100 text-sm mt-1">Friday, November 21, 2025</p>
               </div>
               <div className="flex gap-2 flex-wrap">
                  <button className="px-3 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition font-medium flex items-center gap-2"><Calendar size={14}/> View Schedule</button>
                  <button className="px-3 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition font-medium flex items-center gap-2"><CheckSquare size={14}/> Assignments</button>
                  <button className="px-3 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition font-medium flex items-center gap-2"><Users size={14}/> Students</button>
               </div>
            </div>

            {/* Today's Classes */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold flex items-center gap-2"><BookOpen size={18} className="text-blue-600"/> Today's Classes</h3>
                  <span className="text-blue-600 text-xs font-bold cursor-pointer hover:underline">View All &gt;</span>
               </div>
               <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer">
                     <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-800">Physics 101</span>
                        <div className="flex items-center gap-1 text-xs text-slate-500"><Users size={14}/> 32 students</div>
                     </div>
                     <div className="flex justify-between text-sm text-slate-500 mt-2">
                        <span className="flex items-center gap-1"><Calendar size={14}/> 09:00 AM - 10:30 AM • Room A101</span>
                        <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">Attendance: 28/32 <span className="bg-green-200 text-green-800 px-1 rounded text-[10px]">88%</span></span>
                     </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer">
                     <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-800">Physics Lab</span>
                        <div className="flex items-center gap-1 text-xs text-slate-500"><Users size={14}/> 20 students</div>
                     </div>
                     <div className="flex justify-between text-sm text-slate-500 mt-2">
                        <span className="flex items-center gap-1"><Calendar size={14}/> 04:00 PM - 05:30 PM • Lab B201</span>
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold">Upcoming</span>
                     </div>
                  </div>
               </div>
            </div>

             {/* Assignments */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold flex items-center gap-2 text-slate-800"><CheckSquare size={18} className="text-purple-600"/> Upcoming Assignments & Deadlines</h3>
                  <span className="text-purple-600 text-xs font-bold cursor-pointer hover:underline">View All &gt;</span>
               </div>
               <div className="space-y-3">
                  {[{title: 'Physics Quiz #1', subject: 'Physics 101', due: 'Oct 15', sub: '18/32', color: 'green'}, {title: 'Physics Test', subject: 'Physics 202', due: 'Oct 12', sub: '5/25', color: 'green'}].map((a,i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div>
                           <div className="font-bold text-sm text-slate-800">{a.title}</div>
                           <div className="text-xs text-slate-500 mt-1">{a.subject}</div>
                        </div>
                        <div className="text-right">
                           <div className="text-xs bg-slate-200 px-2 py-1 rounded mb-1 inline-block font-medium">Due: {a.due}</div>
                           <div className="text-xs text-slate-500 mt-1">Submissions: {a.sub}</div>
                           <div className="w-24 h-1.5 bg-slate-200 rounded-full mt-1 ml-auto">
                              <div className={`h-full bg-${a.color}-500 rounded-full`} style={{width: '60%'}}></div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Right Sidebar: Notifications */}
         <div className="w-full xl:w-80 space-y-4 flex-shrink-0">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm h-full">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold flex items-center gap-2"><Bell size={18} className="text-blue-600"/> Notifications</h3>
                  <span className="text-blue-600 text-xs font-bold cursor-pointer">View All</span>
               </div>
               <div className="space-y-4">
                  <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0"><Calendar size={18}/></div>
                     <div>
                        <p className="text-sm font-bold text-slate-800 leading-tight">Department meeting tomorrow at 3:00 PM</p>
                        <p className="text-xs text-slate-500 mt-1">Oct 11, 3:00 PM</p>
                     </div>
                  </div>
                   <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                     <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0"><FileText size={18}/></div>
                     <div>
                        <p className="text-sm font-bold text-slate-800 leading-tight">Sarah Johnson submitted Math Assignment #3</p>
                        <p className="text-xs text-slate-500 mt-1">Oct 10, 2023</p>
                     </div>
                  </div>
                   <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                     <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0"><Users size={18}/></div>
                     <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <p className="text-sm font-bold text-slate-800 leading-tight">Physics 101 had below 70% attendance today</p>
                            <span className="text-red-500 text-xs font-bold">⚠</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Oct 10, 2023</p>
                     </div>
                  </div>
               </div>
               <div className="mt-6 text-center">
                  <span className="text-blue-600 text-sm font-bold cursor-pointer hover:underline">View All Alerts</span>
               </div>
            </div>
         </div>
      </main>
    </div>
  </div>
);

// --- Component: Student View (Matches Screenshot 2) ---
const StudentView = () => (
  <div className="flex h-full bg-white text-slate-800 font-sans overflow-hidden rounded-xl border border-slate-200 shadow-2xl">
    {/* Sidebar */}
    <div className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col flex-shrink-0">
      <div className="p-5 flex items-center gap-2 border-b border-slate-100 h-16">
         <div className="bg-blue-600 text-white p-1 rounded font-bold">A</div>
         <span className="font-bold text-lg">AcadoAI</span>
         <div className="ml-auto"><MoreVertical size={16} className="text-slate-400"/></div>
      </div>
      <div className="p-4 space-y-1 text-sm font-medium text-slate-600 overflow-y-auto flex-1">
         {['Dashboard', 'Class', 'Class Materials', 'Tests', 'Assignments'].map((item, i) => (
            <div key={i} className={`px-3 py-2.5 rounded-md cursor-pointer flex items-center gap-3 ${i === 0 ? 'text-slate-800 font-bold' : 'hover:bg-slate-50'}`}>
               <LayoutDashboard size={18} className={i===0 ? 'text-slate-800' : 'text-slate-400'}/>
               {item}
            </div>
         ))}
         
         <div className="my-2 px-3 py-2 text-slate-400 text-xs font-bold uppercase">AI Tools</div>
         
         {['AI Assistance', 'Ask AI', 'Acado AI Tutor', 'NoteBookLM', 'Attempt Tests'].map((item, i) => (
            <div key={i} className={`px-3 py-2 rounded-md cursor-pointer flex items-center justify-between hover:bg-slate-50`}>
                <div className="flex items-center gap-3">
                  {item === 'Ask AI' ? <MessageSquare size={18} className="text-slate-400"/> : <Settings size={18} className="text-slate-400"/>}
                  {item}
                </div>
               {item === 'AI Assistance' && <span className="text-xs ml-auto">▼</span>}
            </div>
         ))}
         
         <div className="my-2 pt-2 border-t border-slate-100">
            {['Teacher Appointments', 'Admission Letter', 'Pay Fees'].map(item => (
               <div key={item} className="px-3 py-2 hover:bg-slate-50 rounded-md cursor-pointer flex items-center gap-3">
                 <Calendar size={18} className="text-slate-400"/>
                 {item}
               </div>
            ))}
         </div>
      </div>
      <div className="p-4 text-slate-500 text-sm border-t border-slate-100 cursor-pointer hover:text-red-600 transition-colors">
        <div className="flex items-center gap-2">
            <LogOut size={18}/> Logout
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
       <header className="bg-white h-16 border-b border-slate-200 flex justify-end items-center px-6 gap-6 shadow-sm z-10">
          <div className="relative cursor-pointer">
             <Bell size={22} className="text-slate-500 hover:text-slate-700"/>
             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">3</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
             <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full bg-white" />
             </div>
          </div>
       </header>

       <main className="flex-1 p-6 overflow-y-auto no-scrollbar">
          {/* Blue Header */}
          <div className="bg-blue-600 text-white p-8 rounded-xl mb-6 shadow-lg relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">Student Performance</h2>
                <p className="text-blue-100 font-medium opacity-90">Track your academic progress, attendance, test scores, and class activities</p>
             </div>
             {/* Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-20 w-32 h-32 bg-white opacity-5 rounded-full transform translate-y-1/2"></div>
          </div>

          {/* Tabs */}
          <div className="flex bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 mb-6 w-full overflow-x-auto">
             {['Overview', 'Attendance', 'Tests', 'Assignments', 'Activities', 'Quizzes'].map((t,i) => (
                <button key={t} className={`flex-1 min-w-[100px] py-2.5 text-sm font-medium rounded-lg transition-all ${i===0 ? 'bg-white shadow-sm text-slate-900 border border-slate-100' : 'text-slate-500 hover:bg-slate-50'}`}>
                   {i===0 && <LayoutDashboard size={16} className="inline mr-2 text-slate-400"/>}
                   {t}
                </button>
             ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
             {[
               { l: 'Overall GPA', v: '3.8', i: <Award className="text-orange-600"/>, bg: 'bg-orange-50' },
               { l: 'Attendance', v: '92%', i: <Calendar className="text-green-600"/>, bg: 'bg-green-50' },
               { l: 'Tasks Completed', v: '45/50', i: <CheckSquare className="text-blue-600"/>, bg: 'bg-blue-50' },
               { l: 'Class Rank', v: '5 / 32', i: <Award className="text-yellow-600"/>, bg: 'bg-yellow-50' }
             ].map((s,i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                   <div className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center`}>
                      {s.i}
                   </div>
                   <div>
                      <div className="text-slate-500 text-sm font-medium">{s.l}</div>
                      <div className="text-2xl font-bold text-slate-800">{s.v}</div>
                   </div>
                </div>
             ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
             <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-8 text-lg">Performance Trend</h3>
                {/* Smooth Area Chart Simulation */}
                <div className="h-56 w-full relative flex items-end">
                   {/* Y-Axis Labels */}
                   <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 pr-2 font-medium">
                      <span>100</span><span>90</span><span>80</span><span>70</span><span>60</span>
                   </div>
                   {/* Chart Content */}
                   <div className="ml-8 flex-1 h-full relative overflow-hidden">
                       {/* Background Grid Lines */}
                       {[0, 25, 50, 75, 100].map(p => <div key={p} className="absolute w-full border-t border-slate-100 border-dashed" style={{bottom: `${p}%`}}></div>)}
                       
                       {/* The Wave Shape */}
                       <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{stopColor:'#6366f1', stopOpacity:0.4}} />
                              <stop offset="100%" style={{stopColor:'#6366f1', stopOpacity:0}} />
                            </linearGradient>
                          </defs>
                          <path d="M0,80 C80,60 160,90 240,85 C320,80 400,40 480,35 C560,30 640,20 800,10 L800,200 L0,200 Z" fill="url(#grad1)" />
                          <path d="M0,80 C80,60 160,90 240,85 C320,80 400,40 480,35 C560,30 640,20 800,10" stroke="#4f46e5" strokeWidth="3" fill="none" strokeLinecap="round"/>
                       </svg>
                   </div>
                </div>
                <div className="ml-8 mt-4 flex justify-between text-xs text-slate-400 font-medium px-2">
                   <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
                </div>
             </div>

             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">Attendance</h3>
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-56 h-56">
                    {/* Simple CSS Pie Chart using SVG */}
                    <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
                        {/* Background circle */}
                        <circle r="16" cx="16" cy="16" fill="white" />
                        
                        {/* Present 85% (Blue) */}
                        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#3b82f6" strokeWidth="32" strokeDasharray="85 100" />
                        
                        {/* Absent 8% (Red) - starts at 85 */}
                        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#ef4444" strokeWidth="32" strokeDasharray="8 100" strokeDashoffset="-85" />
                        
                        {/* Late 7% (Orange) - starts at 93 */}
                        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#f97316" strokeWidth="32" strokeDasharray="7 100" strokeDashoffset="-93" />
                    </svg>
                    {/* Inner circle to make it a donut (optional based on screenshot, but looks cleaner) */}
                    <div className="absolute inset-0 m-auto w-2/3 h-2/3 bg-white rounded-full flex items-center justify-center hidden"></div>
                    </div>
                    
                    <div className="flex flex-col gap-3 mt-6 w-full px-4">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-600"><div className="w-3 h-3 bg-blue-600 rounded-sm"/> Present</div>
                            <span className="font-bold text-blue-600">85%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-600"><div className="w-3 h-3 bg-orange-500 rounded-sm"/> Late</div>
                            <span className="font-bold text-orange-500">7%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-600"><div className="w-3 h-3 bg-red-500 rounded-sm"/> Absent</div>
                            <span className="font-bold text-red-500">8%</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </main>
    </div>
  </div>
);

export const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserRole>(UserRole.ADMIN);

  return (
    <section id="dashboards" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Seamless Experience</h2>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">
            One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Three Powerful Views.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tailored interfaces for Admins, Teachers, and Students ensure everyone has exactly the tools they need.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-xl shadow-lg border border-slate-100 inline-flex">
            {Object.values(UserRole).map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === role
                    ? 'bg-slate-900 text-white shadow-md transform scale-105'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {role === UserRole.ADMIN && <LayoutDashboard size={16} />}
                {role === UserRole.TEACHER && <Briefcase size={16} />}
                {role === UserRole.STUDENT && <GraduationCap size={16} />}
                {role} View
              </button>
            ))}
          </div>
        </div>

        {/* Visualization Container */}
        <div className="relative h-[850px] w-full max-w-[1200px] mx-auto perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, rotateX: 2 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {activeTab === UserRole.ADMIN && <AdminView />}
              {activeTab === UserRole.TEACHER && <TeacherView />}
              {activeTab === UserRole.STUDENT && <StudentView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
