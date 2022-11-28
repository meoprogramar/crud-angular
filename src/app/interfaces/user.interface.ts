export interface User {
   id?: string;
   created_at?: string;
   updated_at?: string;
   name: string;
   cpf: string;
   sus_card?: string;
   registrant_id?: string;
   birth_date: string;
   phone: string;
   email?: string;
   rg?: string;
   address?: Object;
   last_login?: Date;
   active?: boolean;
   is_authorized?: boolean;
}
