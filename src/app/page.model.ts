export interface Page {
	id?: number;
	title: string;
	body: string;
    create_date?: Date;
    last_edit_date?: Date;
	author?: number;
}