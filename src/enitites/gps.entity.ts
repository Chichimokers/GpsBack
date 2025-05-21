import { IsString } from "class-validator";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "tb_gps" })
export class GPSEntity extends BaseEntity {

    @Column({ type: 'varchar' })
    @IsString()
    latitude: string;

    @Column({ type: 'varchar'})
    @IsString()
    longitude: string;
    
    @Column({ type: 'varchar' })
    @IsString()
    Devicename: string;


}
