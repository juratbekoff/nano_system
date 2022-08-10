import { PrismaClient, attendanceDate, attendancePupil } from "@prisma/client";

const client = new PrismaClient()

class AttendanceService {
    constructor() {
    }

    async attendanceDate(attendanceDate:attendanceDate): Promise<attendanceDate> {
        return client.attendanceDate.create({
            data: {
                date: attendanceDate.date
            }
        })
    }

    async attendancePupil(attendancePupil: attendancePupil): Promise<attendancePupil> {
        return client.attendancePupil.create ({
            data: {
                yes: attendancePupil.yes,
                no: attendancePupil.no
            }
        })
    }
}

export default AttendanceService