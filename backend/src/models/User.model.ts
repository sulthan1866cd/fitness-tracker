import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "users" })
class User {
  @PrimaryColumn()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column({ nullable: true })
  fullName?: string;
  @Column({nullable:true})
  location?: string;
  @Column({ type: "date", nullable: true })
  dateOfBirth?: Date;
  @Column({ type: "double precision", nullable: true })
  height?: number;
  @Column({ type: "double precision", nullable: true })
  weight?: number;
  @Column({ nullable: true })
  age?: number;

  setUser(user: User) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.fullName = user.fullName;
    this.location = user.location;
    this.dateOfBirth = user.dateOfBirth;
    this.height = user.height;
    this.weight = user.weight;
    this.age = user.age;
  }
}
export default User;
