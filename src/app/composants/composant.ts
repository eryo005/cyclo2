export class Composant {
	id: number;
	name: string;
	picture: string;
	types: string;
	created: Date;

	constructor(
		name: string = 'name',
		picture: string = 'http://...',
		types: string = '',
		created: Date = new Date()
	) {
		this.name = name;
		this.picture = picture;
		this.types = types;
		this.created = created;
	}
}