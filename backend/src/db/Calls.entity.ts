//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Calls')
export class CallsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bool', { nullable: true })
  callButton: boolean;
}
