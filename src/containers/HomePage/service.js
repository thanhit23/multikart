import Service from '../../service';
import { API_ENDPOINT_ME } from './constants';

export const isMe = () => Service.get(API_ENDPOINT_ME);
