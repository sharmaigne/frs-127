
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          comment_id: string
          commentor_id: string
          content: string
          parent_id: string | null
          request_id: string
        }
        Insert: {
          comment_id?: string
          commentor_id: string
          content: string
          parent_id?: string | null
          request_id: string
        }
        Update: {
          comment_id?: string
          commentor_id?: string
          content?: string
          parent_id?: string | null
          request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_commentor_id_fkey"
            columns: ["commentor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["comment_id"]
          },
          {
            foreignKeyName: "comments_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "requests"
            referencedColumns: ["request_id"]
          },
        ]
      }
      confirmation_ticket: {
        Row: {
          confirmation_ticket_id: string
          confirmed_by: string | null
          status: Database["public"]["Enums"]["ticket_status"] | null
          timestamp_created: string | null
          timestamp_last_edited: string | null
        }
        Insert: {
          confirmation_ticket_id?: string
          confirmed_by?: string | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          timestamp_created?: string | null
          timestamp_last_edited?: string | null
        }
        Update: {
          confirmation_ticket_id?: string
          confirmed_by?: string | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          timestamp_created?: string | null
          timestamp_last_edited?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservation_ticket_reservation_ticket_id_fkey"
            columns: ["confirmation_ticket_id"]
            isOneToOne: true
            referencedRelation: "endorsement_ticket"
            referencedColumns: ["endorsement_ticket_id"]
          },
        ]
      }
      endorsement_ticket: {
        Row: {
          date_created: string | null
          date_edited: string | null
          endorsement_ticket_id: string
          endorser: string | null
          status: Database["public"]["Enums"]["ticket_status"] | null
        }
        Insert: {
          date_created?: string | null
          date_edited?: string | null
          endorsement_ticket_id?: string
          endorser?: string | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
        }
        Update: {
          date_created?: string | null
          date_edited?: string | null
          endorsement_ticket_id?: string
          endorser?: string | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "endorsement_ticket_endorsement_ticket_id_fkey"
            columns: ["endorsement_ticket_id"]
            isOneToOne: true
            referencedRelation: "requests"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "endorsement_ticket_endorser_fkey"
            columns: ["endorser"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      facilities: {
        Row: {
          admin_id: string
          capacity: number | null
          description: string | null
          facility_id: string
          facility_manager_id: string | null
          image_url: string | null
          location: string | null
          master_facility_id: string | null
          name: string
          type: Database["public"]["Enums"]["facility_type"] | null
        }
        Insert: {
          admin_id?: string
          capacity?: number | null
          description?: string | null
          facility_id?: string
          facility_manager_id?: string | null
          image_url?: string | null
          location?: string | null
          master_facility_id?: string | null
          name: string
          type?: Database["public"]["Enums"]["facility_type"] | null
        }
        Update: {
          admin_id?: string
          capacity?: number | null
          description?: string | null
          facility_id?: string
          facility_manager_id?: string | null
          image_url?: string | null
          location?: string | null
          master_facility_id?: string | null
          name?: string
          type?: Database["public"]["Enums"]["facility_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "facilities_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "facilities_facility_manager_id_fkey"
            columns: ["facility_manager_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "facilities_master_facility_id_fkey"
            columns: ["master_facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
        ]
      }
      manager_approval_ticket: {
        Row: {
          confirmed_by: string
          created_at: string
          manager_approval_id: string
          status: Database["public"]["Enums"]["status"] | null
        }
        Insert: {
          confirmed_by?: string
          created_at?: string
          manager_approval_id?: string
          status?: Database["public"]["Enums"]["status"] | null
        }
        Update: {
          confirmed_by?: string
          created_at?: string
          manager_approval_id?: string
          status?: Database["public"]["Enums"]["status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "manager_approval_ticket_confirmed_by_fkey"
            columns: ["confirmed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      organizations: {
        Row: {
          name: string
          organization_id: string
        }
        Insert: {
          name: string
          organization_id?: string
        }
        Update: {
          name?: string
          organization_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          contact_number: string | null
          email: string
          first_name: string | null
          last_name: string | null
          middle_initial: string | null
          role: Database["public"]["Enums"]["user_roles"] | null
          user_id: string
        }
        Insert: {
          contact_number?: string | null
          email: string
          first_name?: string | null
          last_name?: string | null
          middle_initial?: string | null
          role?: Database["public"]["Enums"]["user_roles"] | null
          user_id?: string
        }
        Update: {
          contact_number?: string | null
          email?: string
          first_name?: string | null
          last_name?: string | null
          middle_initial?: string | null
          role?: Database["public"]["Enums"]["user_roles"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      program: {
        Row: {
          activity: string | null
          request_id: string
          timestamp_end: string | null
          timestamp_start: string
        }
        Insert: {
          activity?: string | null
          request_id: string
          timestamp_end?: string | null
          timestamp_start: string
        }
        Update: {
          activity?: string | null
          request_id?: string
          timestamp_end?: string | null
          timestamp_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "program_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "requests"
            referencedColumns: ["request_id"]
          },
        ]
      }
      related_facilities: {
        Row: {
          master_facility_id: string
          sub_facility_id: string
        }
        Insert: {
          master_facility_id: string
          sub_facility_id: string
        }
        Update: {
          master_facility_id?: string
          sub_facility_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "related_facilities_master_facility_id_fkey"
            columns: ["master_facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
          {
            foreignKeyName: "related_facilities_sub_facility_id_fkey"
            columns: ["sub_facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
        ]
      }
      requests: {
        Row: {
          activity_design_url: string | null
          activity_request_url: string | null
          confirmation_ticket_id: string | null
          date_requested: string | null
          endorsement_ticket_id: string | null
          event_description: string | null
          event_name: string
          facility_id: string
          organization: string | null
          request_id: string
          requestor_id: string
          risk_analysis_url: string | null
          status: Database["public"]["Enums"]["status"] | null
          timestamp_end: string
          timestamp_start: string
        }
        Insert: {
          activity_design_url?: string | null
          activity_request_url?: string | null
          confirmation_ticket_id?: string | null
          date_requested?: string | null
          endorsement_ticket_id?: string | null
          event_description?: string | null
          event_name: string
          facility_id: string
          organization?: string | null
          request_id?: string
          requestor_id?: string
          risk_analysis_url?: string | null
          status?: Database["public"]["Enums"]["status"] | null
          timestamp_end: string
          timestamp_start: string
        }
        Update: {
          activity_design_url?: string | null
          activity_request_url?: string | null
          confirmation_ticket_id?: string | null
          date_requested?: string | null
          endorsement_ticket_id?: string | null
          event_description?: string | null
          event_name?: string
          facility_id?: string
          organization?: string | null
          request_id?: string
          requestor_id?: string
          risk_analysis_url?: string | null
          status?: Database["public"]["Enums"]["status"] | null
          timestamp_end?: string
          timestamp_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "requests_confirmation_ticket_id_fkey"
            columns: ["confirmation_ticket_id"]
            isOneToOne: false
            referencedRelation: "confirmation_ticket"
            referencedColumns: ["confirmation_ticket_id"]
          },
          {
            foreignKeyName: "requests_endorsement_ticket_id_fkey"
            columns: ["endorsement_ticket_id"]
            isOneToOne: false
            referencedRelation: "endorsement_ticket"
            referencedColumns: ["endorsement_ticket_id"]
          },
          {
            foreignKeyName: "requests_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
          {
            foreignKeyName: "requests_requestor_id_fkey"
            columns: ["requestor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      risks: {
        Row: {
          effect: string | null
          escalation_point: string | null
          impact: Database["public"]["Enums"]["levels"] | null
          likelihood: Database["public"]["Enums"]["levels"] | null
          mitigating_action: string | null
          request_id: string | null
          risk: string
          risk_id: string
        }
        Insert: {
          effect?: string | null
          escalation_point?: string | null
          impact?: Database["public"]["Enums"]["levels"] | null
          likelihood?: Database["public"]["Enums"]["levels"] | null
          mitigating_action?: string | null
          request_id?: string | null
          risk: string
          risk_id?: string
        }
        Update: {
          effect?: string | null
          escalation_point?: string | null
          impact?: Database["public"]["Enums"]["levels"] | null
          likelihood?: Database["public"]["Enums"]["levels"] | null
          mitigating_action?: string | null
          request_id?: string | null
          risk?: string
          risk_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "risks_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "requests"
            referencedColumns: ["request_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      facility_type: "hall" | "classroom" | "court" | "field"
      levels: "low" | "medium" | "high"
      status: "Accepted" | "Withdrawn" | "Pending" | "Denied" | "Draft"
      ticket_status: "approved" | "pending" | "rejected" | "changes_requested"
      user_roles:
        | "superadmin"
        | "osa"
        | "soas"
        | "facility manager"
        | "student user"
        | "non student user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
