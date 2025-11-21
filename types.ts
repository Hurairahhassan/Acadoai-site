import React from 'react';

export enum UserRole {
  ADMIN = 'Admin',
  TEACHER = 'Teacher',
  STUDENT = 'Student'
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface DashboardStats {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon?: React.ReactNode;
}