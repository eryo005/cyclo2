import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MACHINES} from './machines/mock-machines';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let machines = MACHINES;
		return { machines };
	}
}