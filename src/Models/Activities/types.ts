import { Profile } from "../Profiles/Profiles";

export default interface Activity {
  id: number;
  name: string;
  description: string;
  date: string;
  category: string;
  city: string;
  venue: string;
  hostName?: string;
  isCancelled?: boolean;
  attendees?: Profile[];
  hostId: string;
  hostName?: string;
  isGoing?: boolean;
  isHost?: boolean;
}
