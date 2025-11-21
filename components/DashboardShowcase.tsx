
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, BookOpen, CheckSquare, TrendingUp, 
  Bell, Settings, Search, LogOut, Calendar, FileText, PieChart, Award,
  Briefcase, GraduationCap
} from 'lucide-react';
import { UserRole } from '../types';

// --- Component: Admin View (Matches Screenshot 1) ---
const AdminView = () => (
  <div className="flex h-full bg-slate-50 text-slate-800 font-sans overflow-hidden rounded-xl border border-slate-200 shadow-2xl">
    {/* Sidebar */}
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col hidden lg:flex">
      <div className="p-5 flex items-center gap-2 border-b border-slate-100">
        <div className="bg-blue-600 text-white p-1 rounded">
          <span className="font-bold text-lg">A</span>
        </div>
        <span className="font-bold text-lg">Admin Panel</span>
      </div>
      <div className="p-4 space-y-1 text-sm font-medium">
        <div className="text-blue-600 bg-blue-50 px-3 py-2 rounded-md">Admin Mode</div>
        {['Dashboard', 'User Management', 'Course Management', 'Class Management', 'Attendance Management', 'Finance Management', 'Uploads', 'AI Assistant', 'General Settings'].map((item, i) => (
          <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${i === 0 ? 'text-blue-600 bg-blue-50' : 'text-slate-500 hover:bg-slate-50'}`}>
            {i === 0 && <LayoutDashboard size={18}/>}
            {i === 1 && <Users size={18}/>}
            {i > 1 && <div className="w-4 h-4" />} 
            {item}
          </div>
        ))}
      </div>
      <div className="mt-auto p-4 border-t border-slate-100 text-slate-500 flex items-center gap-2 cursor-pointer">
        <LogOut size={18} /> Logout
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Blue Header */}
        <div className="bg-blue-600 text-white p-6 rounded-xl mb-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Admin Dashboard</h2>
          <p className="text-blue-100 opacity-90">Overview of system performance, users, and activities</p>
        </div>

        {/* Tab-like pills */}
        <div className="flex gap-2 mb-6">
          {['Overview', 'Students', 'Teachers', 'Classes'].map((tab, i) => (
             <button key={tab} className={`px-4 py-1.5 rounded-md text-sm font-medium ${i === 0 ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:bg-slate-200'}`}>
               {tab}
             </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
           {[
             { title: 'Total Students', val: '1,250', sub: '+1167 since last semester', icon: <Users className="text-blue-500" /> },
             { title: 'Total Teachers', val: '84', sub: '+36 since last semester', icon: <Briefcase className="text-purple-500" /> },
             { title: 'Active Classes', val: '36', sub: '+5 from last month', icon: <BookOpen className="text-green-500" /> },
             { title: 'Average GPA', val: '3.42', sub: 'Attendance 92%', icon: <Award className="text-yellow-500" /> }
           ].map((card, i) => (
             <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <span className="text-slate-500 text-sm font-medium">{card.title}</span>
                 <div className="p-1.5 bg-slate-50 rounded-lg">{card.icon}</div>
               </div>
               <div className="text-3xl font-bold text-slate-900 mb-1">{card.val}</div>
               <div className="text-xs text-green-600 font-medium">{card.sub}</div>
               {i === 3 && <div className="mt-2 h-1 w-full bg-slate-100 rounded-full"><div className="h-full w-[92%] bg-blue-600 rounded-full"></div></div>}
             </div>
           ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold flex items-center gap-2"><TrendingUp size={18} className="text-blue-600"/> Student Performance Trends</h3>
             </div>
             <div className="space-y-4">
                {[
                  { mon: 'Jan', val: 70 }, { mon: 'Feb', val: 75 }, { mon: 'Mar', val: 68 }, { mon: 'Apr', val: 78 }, { mon: 'May', val: 82 }
                ].map((d) => (
                  <div key={d.mon} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-8">{d.mon}</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 rounded-full" style={{width: `${d.val}%`}}></div>
                    </div>
                    <span className="text-xs font-bold">{d.val}%</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 className="font-bold mb-4 text-purple-900 flex items-center gap-2"><TrendingUp size={18} className="text-purple-600"/> Teacher Activity</h3>
             <div className="space-y-0 text-sm">
               <div className="grid grid-cols-4 pb-2 border-b border-slate-100 text-slate-400 text-xs font-semibold uppercase">
                  <div className="col-span-2">Teacher</div>
                  <div>Class</div>
                  <div className="text-right">Feed</div>
               </div>
               {[
                 { name: 'Dr. Johnson', c: 15, f: 28 },
                 { name: 'Mrs. Smith', c: 18, f: 32 },
                 { name: 'Mr. Davis', c: 12, f: 24 },
                 { name: 'Dr. Garcia', c: 16, f: 19 },
                 { name: 'Ms. Wilson', c: 14, f: 22 },
               ].map((t, i) => (
                 <div key={i} className="grid grid-cols-4 py-3 border-b border-slate-50 items-center">
                   <div className="col-span-2 font-medium text-slate-700">{t.name}</div>
                   <div className="text-slate-500">{t.c}</div>
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
    <div className="w-60 bg-white border-r border-slate-200 hidden lg:flex flex-col">
       <div className="p-5 flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded text-xs font-bold">T</div>
          <span className="font-bold">Teacher Portal</span>
       </div>
       <div className="p-3 space-y-1 text-sm">
          {['Dashboard', 'Classes', 'Attendance', 'Exams', 'Class Tests', 'Feedback', 'AI Assistance'].map((item, i) => (
             <div key={i} className={`px-3 py-2.5 rounded-lg flex items-center gap-3 cursor-pointer ${i===0 ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-500 hover:bg-slate-50'}`}>
                {i===0 && <LayoutDashboard size={18} />}
                {item}
             </div>
          ))}
       </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="p-6 pb-0">
         <h2 className="text-2xl font-bold text-slate-900">Welcome, Teacher</h2>
         <p className="text-slate-500 text-sm mb-4">Friday, November 21, 2025</p>
      </div>
      
      <main className="flex-1 p-6 pt-2 overflow-y-auto flex gap-6">
         {/* Center Column */}
         <div className="flex-1 space-y-6">
            {/* Blue Header Card */}
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md flex justify-between items-center">
               <div>
                  <h2 className="text-2xl font-bold">Welcome, Teacher</h2>
                  <p className="text-blue-100 text-sm mt-1">Manage your classes and assignments efficiently.</p>
               </div>
               <div className="flex gap-2">
                  <button className="px-3 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition font-medium">View Schedule</button>
                  <button className="px-3 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition font-medium">Assignments</button>
               </div>
            </div>

            {/* Today's Classes */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold flex items-center gap-2"><BookOpen size={18} className="text-blue-600"/> Today's Classes</h3>
                  <span className="text-blue-600 text-xs font-bold cursor-pointer">View All</span>
               </div>
               <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                     <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-800">Physics 101</span>
                        <div className="flex items-center gap-1 text-xs text-slate-500"><Users size={12}/> 32 students</div>
                     </div>
                     <div className="flex justify-between text-sm text-slate-500">
                        <span>09:00 AM - 10:30 AM • Room A101</span>
                        <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold">88% Attd</span>
                     </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                     <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-800">Physics Lab</span>
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold">Upcoming</span>
                     </div>
                     <div className="flex justify-between text-sm text-slate-500">
                        <span>04:00 PM - 05:30 PM • Lab B201</span>
                        <div className="flex items-center gap-1 text-xs"><Users size={12}/> 20 students</div>
                     </div>
                  </div>
               </div>
            </div>

             {/* Assignments */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold flex items-center gap-2"><CheckSquare size={18} className="text-purple-600"/> Upcoming Assignments</h3>
                  <span className="text-purple-600 text-xs font-bold cursor-pointer">View All</span>
               </div>
               <div className="space-y-3">
                  {[{title: 'Physics Quiz #1', due: 'Oct 15', sub: '18/32'}, {title: 'Physics Test', due: 'Oct 12', sub: '5/25'}].map((a,i) => (
                     <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div>
                           <div className="font-bold text-sm">{a.title}</div>
                           <div className="text-xs text-slate-500">Physics 101</div>
                        </div>
                        <div className="text-right">
                           <div className="text-xs bg-slate-200 px-2 py-0.5 rounded mb-1">Due: {a.due}</div>
                           <div className="text-xs text-green-600 font-bold">Submissions: {a.sub}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Right Sidebar: Notifications */}
         <div className="w-72 hidden xl:block space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm h-full">
               <h3 className="font-bold mb-4 flex items-center gap-2"><Bell size={18}/> Notifications</h3>
               <div className="space-y-4">
                  <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0"><Calendar size={14}/></div>
                     <div>
                        <p className="text-xs font-bold text-slate-800">Dept Meeting</p>
                        <p className="text-xs text-slate-500 mt-1">Tomorrow at 3:00 PM</p>
                     </div>
                  </div>
                   <div className="flex gap-3 p-3 bg-green-50 rounded-lg">
                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0"><FileText size={14}/></div>
                     <div>
                        <p className="text-xs font-bold text-slate-800">Sarah submitted</p>
                        <p className="text-xs text-slate-500 mt-1">Math Assignment #3</p>
                     </div>
                  </div>
                   <div className="flex gap-3 p-3 bg-red-50 rounded-lg">
                     <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0"><Users size={14}/></div>
                     <div>
                        <p className="text-xs font-bold text-slate-800">Low Attendance</p>
                        <p className="text-xs text-slate-500 mt-1">Physics 101 below 70% today</p>
                     </div>
                  </div>
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
    <div className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col">
      <div className="p-5 flex items-center gap-2 border-b border-slate-100">
         <div className="bg-blue-600 text-white p-1 rounded">A</div>
         <span className="font-bold text-lg">AcadoAI</span>
      </div>
      <div className="p-4 space-y-2 text-sm font-medium text-slate-500">
         {['Dashboard', 'Class', 'Class Materials', 'Tests', 'Assignments', 'AI Assistance', 'Ask AI', 'Acado AI Tutor', 'NoteBookLM'].map((item, i) => (
            <div key={i} className={`px-3 py-2 rounded-md cursor-pointer flex items-center justify-between ${i === 0 ? 'text-blue-600 bg-blue-50' : 'hover:bg-slate-50'}`}>
               {item}
               {item === 'AI Assistance' && <span className="text-xs ml-auto">▼</span>}
            </div>
         ))}
         <div className="pt-4 border-t border-slate-100 mt-4">
            {['Teacher Appointments', 'Admission Letter', 'Pay Fees'].map(item => (
               <div key={item} className="px-3 py-2 hover:bg-slate-50 rounded-md cursor-pointer">{item}</div>
            ))}
         </div>
      </div>
      <div className="mt-auto p-4 text-slate-500 text-sm border-t border-slate-100 cursor-pointer"><LogOut size={16} className="inline mr-2"/> Logout</div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
       <header className="bg-white h-16 border-b border-slate-200 flex justify-end items-center px-6 gap-4">
          <div className="relative">
             <Bell size={20} className="text-slate-400"/>
             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
             <img src="https://picsum.photos/100/100?random=5" alt="User" />
          </div>
       </header>

       <main className="flex-1 p-6 overflow-y-auto">
          {/* Blue Header */}
          <div className="bg-blue-600 text-white p-8 rounded-xl mb-6 shadow-md">
             <h2 className="text-3xl font-bold mb-2">Student Performance</h2>
             <p className="text-blue-100">Track your academic progress, attendance, test scores, and class activities</p>
          </div>

          {/* Tabs */}
          <div className="flex bg-white p-1 rounded-lg shadow-sm border border-slate-200 mb-6 w-full overflow-x-auto">
             {['Overview', 'Attendance', 'Tests', 'Assignments', 'Activities', 'Quizzes'].map((t,i) => (
                <button key={t} className={`flex-1 min-w-[100px] py-2 text-sm font-medium rounded-md ${i===0 ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}>
                   {i===0 && <LayoutDashboard size={14} className="inline mr-2"/>}
                   {t}
                </button>
             ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
             {[
               { l: 'Overall GPA', v: '3.8', i: <Award className="text-orange-500"/> },
               { l: 'Attendance', v: '92%', i: <Calendar className="text-green-500"/> },
               { l: 'Tasks Completed', v: '45/50', i: <CheckSquare className="text-blue-500"/> },
               { l: 'Class Rank', v: '5 / 32', i: <Award className="text-yellow-500"/> }
             ].map((s,i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-full ${i===0?'bg-orange-50':i===1?'bg-green-50':i===2?'bg-blue-50':'bg-yellow-50'} flex items-center justify-center`}>
                      {s.i}
                   </div>
                   <div>
                      <div className="text-slate-500 text-xs">{s.l}</div>
                      <div className="text-xl font-bold text-slate-800">{s.v}</div>
                   </div>
                </div>
             ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-6">Performance Trend</h3>
                {/* Smooth Area Chart Simulation */}
                <div className="h-48 w-full relative flex items-end">
                   {/* Y-Axis Labels */}
                   <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 pr-2">
                      <span>100</span><span>90</span><span>80</span><span>70</span><span>60</span>
                   </div>
                   {/* Chart Content */}
                   <div className="ml-8 flex-1 h-full relative overflow-hidden">
                       {/* Background Grid Lines */}
                       {[0, 25, 50, 75, 100].map(p => <div key={p} className="absolute w-full border-t border-slate-50" style={{bottom: `${p}%`}}></div>)}
                       
                       {/* The Wave Shape - CSS Clipped Gradient */}
                       <div className="absolute bottom-0 left-0 right-0 top-10 bg-gradient-to-t from-blue-100 to-blue-500 opacity-20" style={{clipPath: 'polygon(0% 100%, 0% 60%, 20% 70%, 40% 65%, 60% 80%, 80% 75%, 100% 90%, 100% 100%)'}}></div>
                       <div className="absolute bottom-0 left-0 right-0 top-10 border-t-4 border-blue-500" style={{clipPath: 'polygon(0% 60%, 20% 70%, 40% 65%, 60% 80%, 80% 75%, 100% 90%, 100% 100%, 0% 100%)', background: 'none', height: '100%'}}></div>
                       {/* Actual SVG line for sharpness */}
                       <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <path d="M0,80 C50,60 100,90 150,85 C200,80 250,50 300,55 C350,60 400,30 500,20 L500,150 L0,150 Z" fill="url(#grad1)" />
                          <path d="M0,80 C50,60 100,90 150,85 C200,80 250,50 300,55 C350,60 400,30 500,20" stroke="#3b82f6" strokeWidth="3" fill="none" />
                          <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.2}} />
                              <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                            </linearGradient>
                          </defs>
                       </svg>
                   </div>
                </div>
                <div className="ml-8 mt-2 flex justify-between text-xs text-slate-400">
                   <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
                </div>
             </div>

             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                <h3 className="font-bold text-slate-800 mb-4 self-start">Attendance</h3>
                <div className="relative w-48 h-48">
                   {/* Simple CSS Pie Chart */}
                   <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
                      {/* Present 85% (Blue) */}
                      <circle r="16" cx="16" cy="16" fill="#3b82f6" stroke="#3b82f6" strokeWidth="32" strokeDasharray="85 100" />
                      {/* Absent 8% (Red) */}
                      <circle r="16" cx="16" cy="16" fill="transparent" stroke="#ef4444" strokeWidth="32" strokeDasharray="8 100" strokeDashoffset="-85" />
                      {/* Late 7% (Orange) */}
                      <circle r="16" cx="16" cy="16" fill="transparent" stroke="#f97316" strokeWidth="32" strokeDasharray="7 100" strokeDashoffset="-93" />
                   </svg>
                </div>
                <div className="flex gap-4 mt-6 text-xs font-medium">
                   <div className="flex items-center gap-1 text-blue-600"><div className="w-2 h-2 bg-blue-600 rounded-full"/> Present: 85%</div>
                   <div className="flex items-center gap-1 text-orange-500"><div className="w-2 h-2 bg-orange-500 rounded-full"/> Late: 7%</div>
                   <div className="flex items-center gap-1 text-red-500"><div className="w-2 h-2 bg-red-500 rounded-full"/> Absent: 8%</div>
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
    <section id="dashboards" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            One Platform. <span className="text-blue-600">Three Powerful Views.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience a tailored interface for every stakeholder in your educational ecosystem.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
            {Object.values(UserRole).map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === role
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {role} Dashboard
              </button>
            ))}
          </div>
        </div>

        {/* Visualization Container */}
        <div className="relative h-[800px] w-full max-w-6xl mx-auto perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
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
