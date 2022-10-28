'use strict';
import { Model } from 'sequelize';
interface ProjectAssignmentAttributes {
  ProjectId: number;
  UserId: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class ProjectAssignment extends Model<ProjectAssignmentAttributes>
    implements ProjectAssignmentAttributes {
    UserId!: string;
    ProjectId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  ProjectAssignment.init({
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ProjectAssignment',
  });
  return ProjectAssignment;
};