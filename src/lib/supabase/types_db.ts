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
      base_position: {
        Row: {
          created_at: string
          date: string | null
          id: string
          report_id: string
          title: string
          total_cost: number
          type: Database["public"]["Enums"]["position_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          date?: string | null
          id?: string
          report_id: string
          title?: string
          total_cost?: number
          type?: Database["public"]["Enums"]["position_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          date?: string | null
          id?: string
          report_id?: string
          title?: string
          total_cost?: number
          type?: Database["public"]["Enums"]["position_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "base_position_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
        ]
      }
      bill_position: {
        Row: {
          base_position_id: string
          created_at: string
          id: string
          image_url: string | null
          updated_at: string
        }
        Insert: {
          base_position_id: string
          created_at?: string
          id?: string
          image_url?: string | null
          updated_at?: string
        }
        Update: {
          base_position_id?: string
          created_at?: string
          id?: string
          image_url?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bill_position_base_position_id_fkey"
            columns: ["base_position_id"]
            isOneToOne: true
            referencedRelation: "base_position"
            referencedColumns: ["id"]
          },
        ]
      }
      report: {
        Row: {
          assignee_id: string | null
          created_at: string
          creator_id: string
          date: string | null
          id: string
          status: Database["public"]["Enums"]["report_status"]
          updated_at: string
        }
        Insert: {
          assignee_id?: string | null
          created_at?: string
          creator_id?: string
          date?: string | null
          id?: string
          status?: Database["public"]["Enums"]["report_status"]
          updated_at?: string
        }
        Update: {
          assignee_id?: string | null
          created_at?: string
          creator_id?: string
          date?: string | null
          id?: string
          status?: Database["public"]["Enums"]["report_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_assignee_id_fkey"
            columns: ["assignee_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      travel_position: {
        Row: {
          base_position_id: string
          cost: number
          created_at: string
          distance: number
          id: string
          is_full_day: boolean
          updated_at: string
        }
        Insert: {
          base_position_id: string
          cost?: number
          created_at?: string
          distance?: number
          id?: string
          is_full_day?: boolean
          updated_at?: string
        }
        Update: {
          base_position_id?: string
          cost?: number
          created_at?: string
          distance?: number
          id?: string
          is_full_day?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "travel_position_base_position_id_fkey"
            columns: ["base_position_id"]
            isOneToOne: true
            referencedRelation: "base_position"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          company: Database["public"]["Enums"]["company"]
          country: Database["public"]["Enums"]["country"]
          created_at: string | null
          email: string
          full_name: string
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company?: Database["public"]["Enums"]["company"]
          country?: Database["public"]["Enums"]["country"]
          created_at?: string | null
          email: string
          full_name: string
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company?: Database["public"]["Enums"]["company"]
          country?: Database["public"]["Enums"]["country"]
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_updated_at_trigger: {
        Args: {
          table_name: string
        }
        Returns: undefined
      }
    }
    Enums: {
      company: "LIT_BERATUNG_GMBH" | "LIT_SOFTWARE_GMBH"
      country: "GERMANY" | "AUSTRIA" | "SWITZERLAND"
      position_type: "TRAVEL" | "BILL"
      report_status:
        | "DRAFT"
        | "WAITING_FOR_REVIEW"
        | "IN_REVIEW"
        | "REJECTED"
        | "ACCEPTED"
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

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

