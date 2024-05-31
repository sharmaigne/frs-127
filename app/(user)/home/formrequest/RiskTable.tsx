import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const RiskTable = ({ control, register, fields, append, remove }: any) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white ">
      <thead>
        <tr>
          <th className="px-4 py-2">Risk</th>
          <th className="px-4 py-2">Effect</th>
          <th className="px-4 py-2">Likelihood</th>
          <th className="px-4 py-2">Impact</th>
          <th className="px-4 py-2">Mitigating Action</th>
          <th className="px-4 py-2">Escalation Point</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((item: any, index: number) => (
          <tr key={item.id}>
            <td className="border px-4 py-2 border-none">
              <Input
                {...register(`risks_table.${index}.risk`)}
                defaultValue={item.risk}
                placeholder="Risk"
              />
            </td>
            <td className="border px-4 py-2 border-none">
              <Input
                {...register(`risks_table.${index}.effect`)}
                defaultValue={item.effect}
                placeholder="Effect"
              />
            </td>

            <td className="border px-2 py-2 border-none">
              <Select
                {...register(`risks_table.${index}.likelihood`)}
                defaultValue={item.likelihood}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </td>

            <td className="border px-2 py-2 border-none">
              <Select
                {...register(`risks_table.${index}.impact`)}
                defaultValue={item.impact}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </td>

            <td className="border px-4 py-2 border-none">
              <Input
                {...register(`risks_table.${index}.mitigating_action`)}
                defaultValue={item.mitigating_action}
                placeholder="Mitigating Action"
              />
            </td>

            <td className="border px-4 py-2 border-none">
              <Textarea
                {...register(`risks_table.${index}.escalation_point`)}
                defaultValue={item.escalation_point}
                placeholder="Escalation Point"
                className="border-none"
              />
            </td>

            <td className="border px-4 py-2 border-none">
              <Textarea
                {...register(`risks_table.${index}.actions`)}
                defaultValue={item.actions}
                placeholder="Actions"
                className="border-none"
              />
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
    <Button
      type="button"
      onClick={() =>
        append({
          risk: "",
          effect: "",
          likelihood: "low",
          impact: "low",
          mitigating_action: "",
          escalation_point: "",
          actions: "",
        })
      }
    >
      Add Row
    </Button>
  </div>
);

export default RiskTable;
