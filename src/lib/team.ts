// Types for team members - safe for both client and server
export interface TeamMember {
  position: string;
  name: string;
}

export function isAdditionalDirector(member: TeamMember): boolean {
  return member.position.toLowerCase().includes("additional");
}
