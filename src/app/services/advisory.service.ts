import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Advisory } from '../interfaces/Advisory';


@Injectable({
  providedIn: 'root'
})
export class AdvisoryService {
  private _supabaseClient: SupabaseClient;

  constructor(
  ) {
    this._supabaseClient = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  async getAdvisories(): Promise<any> {
    var result = await this._supabaseClient.from('advisorys')
      .select('*')
    return result.data as Advisory[]
  }

  async loadAdvisoryMessagesCount(advisory: Advisory) {
    var cant = await this._supabaseClient.from('advisory_messages')
      .select('id')
      .eq('advisory_id', advisory.id)

    advisory.messages = cant.data?.length
    return advisory
  }

  async getAdvisoryById(id: number) {
    var result = await this._supabaseClient.from('advisorys')
      .select('*')
      .eq('id', id)
    return result.data?.[0] as Advisory
  }
}
