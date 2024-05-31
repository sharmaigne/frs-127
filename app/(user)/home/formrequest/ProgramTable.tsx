import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProgramTable = ({ control, register, fields, append, remove }: any) => (
  <div className="overflow-x-auto mt-8">
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-4 py-2">Start Time</th>
          <th className="px-4 py-2">End Time</th>
          <th className="px-4 py-2">Program</th>

        </tr>
      </thead>
      <tbody>
        {fields.map((item: any, index: number) => (
          <tr key={item.id}>
            <td className="border px-4 py-2 border-none">
              <Input type="datetime-local" {...register(`program_schedule.${index}.time_start`)} defaultValue={item.time_start} />
            </td>
            <td className="border px-4 py-2 border-none">
              <Input type="datetime-local" {...register(`program_schedule.${index}.time_end`)} defaultValue={item.time_end} />
            </td>
            <td className="border px-4 py-2 border-none">
              <Input {...register(`program_schedule.${index}.program`)} defaultValue={item.program} placeholder="Program" />
            </td>
            <td className="border px-4 py-2 border-none">
              <Button type="button" onClick={() => remove(index)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Button type="button" onClick={() => append({ time_start: "", time_end: "", program: "" })}>
      Add Row
    </Button>
  </div>
);

export default ProgramTable;