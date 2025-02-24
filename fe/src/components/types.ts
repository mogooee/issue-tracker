export interface UserTypes {
  id: number;
  loginId: string;
  profileImageUrl: string;
}

export type DropdownListTypes = {
  id: number;
  title?: string;
  loginId?: string;
  openIssueCount?: number;
  closedIssueCount?: number;
  backgroundColor?: string;
  profileImageUrl?: string;
};

export type AssignTypes = {
  id: number;
  loginId: string;
  profileImageUrl: string;
};

export type MilestoneTypes = {
  id: number;
  title: string;
  openIssueCount: number;
  closedIssueCount: number;
};

export type LabelTypes = {
  id: number;
  title: string;
  backgroundColor: string;
};
