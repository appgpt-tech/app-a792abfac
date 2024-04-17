//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserPreferences')
export class UserPreferencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  sessionSetting: string;

  @Column('text', { nullable: true })
  llmResponse: string;
}
