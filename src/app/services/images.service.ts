import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { ImagesData } from '../interfaces/ImagesData';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private _supabaseClient: SupabaseClient
  imagesUrl: string = 'https://bmkkolipsthwmgjsnoaj.supabase.co/storage/v1/object/public/banners/'

  constructor(
  ) {
    this._supabaseClient = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  async getBanners(): Promise<any> {
    var result = await this._supabaseClient.from('images')
      .select('*')
      .eq('active', true)
      .eq('type', 1)
    return result.data as ImagesData[]
  }
}
