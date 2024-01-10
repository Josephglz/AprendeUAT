import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { CareerData, SubjectData } from '../interfaces/CareerData';


@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private _supabaseClient: SupabaseClient;

  constructor(
  ) {
    this._supabaseClient = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  async getCareers(): Promise<any> {
    var result = await this._supabaseClient.from('careers')
      .select('*')
    return result.data as CareerData[]
  }

  async getSubjects(careerId: number): Promise<any> {
    var result = await this._supabaseClient.from('subjects')
      .select('*')
      .eq('career_id', careerId)
    return result.data as SubjectData[]
  }
}
