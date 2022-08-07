import { Request, Response } from "express";
import AttendanceService from "../../services/ceo/attendance.service";
import { attendanceDate, attendancePupil } from "@prisma/client";

const attendanceService = new AttendanceService()

class AttendanceCeoController {
    
    async attendanceDate(req:Request, res:Response) {
        try {
            let attendanceDate: attendanceDate = {
                id: req.body.id,
                date: req.body.date
          }
            attendanceService.attendanceDate(attendanceDate)
                .then(attendanceDate => res.send( { message: 'The Attendance Date created!', attendanceDate}))
        } catch (error) {
            console.log(error)
        }
    };

    async attendancePupil(req:Request, res:Response) {
        try {
            let attendancePupil: attendancePupil = {
                id: req.body.id,
                yes: req.body.yes,
                no: req.body.no
            }
            attendanceService.attendancePupil(attendancePupil)
                .then(attendancePupil => res.send( { message: 'The Attendance Pupil created!', attendancePupil})) 
        } catch (error) {
            console.log(error)
        }
    }

}

export default AttendanceCeoController